using ajg_technical_interview.Models;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;

namespace ajg_technical_interview.ClientApp.Repositories
{
    public class Repository<T> : IRepository<T> where T : BaseEntity
    {
        private ConcurrentBag<T> _entities = new ConcurrentBag<T>();

        public void Add(T entity)
        {
            if (GetById(entity.Id) != null)
            {
                throw new InvalidOperationException("Entity with the same ID already exists");
            };

            _entities.Add(entity);
        }
        public IEnumerable<T> GetAll() => _entities;
        public T GetById(Guid id) => _entities.FirstOrDefault(e => e.Id == id);
        public IEnumerable<T> Get(Func<T, bool> predicate) => _entities.Where(predicate);
    }
}
