using ajg_technical_interview.Models;
using System;
using System.Collections.Generic;

namespace ajg_technical_interview.ClientApp.Repositories
{
    public interface IRepository<T> where T : BaseEntity
    {
        void Add(T entity);
        IEnumerable<T> GetAll();
        T GetById(Guid id);
        IEnumerable<T> Get(Func<T, bool> predicate);
    }
}