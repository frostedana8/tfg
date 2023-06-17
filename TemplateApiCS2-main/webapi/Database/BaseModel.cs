using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection;

namespace webapi.Database
{
    public abstract class BaseModel<T> where T : BaseModel<T>
    {
        private static Type BaseType = typeof(BaseModel<T>);
        private dynamic _Id;
        [NotMapped]
        public virtual dynamic Id 
        { 
            get {
                Console.WriteLine("Id getter");
                if (RealIdFieldProperty is null)
                {
                    return _Id;
                }

                return (dynamic)RealIdFieldProperty.GetValue(this); 
            }
            set {
                Console.WriteLine("Id setter");
                if (RealIdFieldProperty is null)
                {
                    _Id = value;
                    return;
                }

                RealIdFieldProperty.SetValue(this, value); 
            }
        }
        private PropertyInfo RealIdFieldProperty { get; set; }
        private PropertyInfo[] FilteredProperties { get; }

        public BaseModel()
        {
            var type = GetType();

            var cache = new List<PropertyInfo>();

            foreach (var propertyInfo in type.GetProperties())
            {
                if(propertyInfo.Name == nameof(Id) && propertyInfo.DeclaringType != BaseType)
                {
                    RealIdFieldProperty = propertyInfo;
                }
                if (propertyInfo?.GetMethod?.IsPublic == true)
                {
                    if (propertyInfo.PropertyType.IsValueType || propertyInfo.PropertyType == typeof(string))
                    {
                        cache.Add(propertyInfo);
                    }
                }
            }

            FilteredProperties = cache.ToArray();
        }

        public void UpdateValuesFrom(T model)
        {
            for (int i = 0; i < FilteredProperties.Length; i++)
            {
                var prop = FilteredProperties[i];

                if (prop.SetMethod is not null)
                {
                    var value = prop.GetValue(model, null);
                    prop.SetValue(this, value, null);
                }
            }
        }
    }
}
