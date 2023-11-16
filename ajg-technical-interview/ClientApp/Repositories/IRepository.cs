using ajg_technical_interview.Models;
using System;
using System.Collections.Generic;

namespace ajg_technical_interview.ClientApp.Repositories
{
    public interface IRepository<T> where T : Entity
    {
        void Add(T entity);
        IEnumerable<T> GetAll();
        T GetById(Guid id);
        void Delete(Guid id);
    }
}