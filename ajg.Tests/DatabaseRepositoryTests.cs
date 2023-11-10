using ajg_technical_interview.Models;
using Moq;
using NUnit.Framework;
using System.Threading.Tasks;
using System;
using ajg_technical_interview.Models.Requests;
using ajg_technical_interview.Models.ViewModels;
using ajg_technical_interview.Repositories;
using ajg_technical_interview.Services;
using ajg_technical_interview.Validation;
using AutoMapper;
using System.Collections.Generic;
using System.Threading;

namespace ajg.Tests
{
    public class DatabaseRepositoryTests
    {
        private Mock<IMapper> _mockMapper;
        private DatabaseRepository _databaseRepository;

        private static readonly SanctionedEntity sanctionedEntity = new SanctionedEntity()
        {
            Name = "name",
            Accepted = true,
            Domicile = "test"
        };

        private static readonly SanctionedEntity sanctionedEntity2 = new SanctionedEntity()
        {
            Name = "name",
            Accepted = true,
            Domicile = "abc"
        };

        private static readonly SanctionedEntity sanctionedEntity3 = new SanctionedEntity()
        {
            Name = "name",
            Accepted = true,
            Domicile = "test"
        };

        private static readonly AddSanctionedEntityRequest sanctionedEntityRequest = new AddSanctionedEntityRequest()
        {
            Name = "name",
            Accepted = true,
            Domicile = "test"
        };

        private static readonly AddSanctionedEntityRequest sanctionedEntityRequest2 = new AddSanctionedEntityRequest()
        {
            Name = "name",
            Accepted = true,
            Domicile = "abc"
        };

        private static readonly AddSanctionedEntityRequest sanctionedEntityRequest3 = new AddSanctionedEntityRequest()
        {
            Name = "name",
            Accepted = true,
            Domicile = "test"
        };

        [SetUp]
        public void Setup()
        {
            _mockMapper = new Mock<IMapper>();
            _databaseRepository = new DatabaseRepository();
        }

        [Test]
        public void ValidateAddSanctionedEntity_DoesNotThrow()
        {
            _databaseRepository.CreateSanctionedEntityAsync(sanctionedEntity, CancellationToken.None).ConfigureAwait(false);

            Assert.DoesNotThrowAsync(async () =>
            {
                await _databaseRepository.ValidateAddSanctionedEntityAsync(sanctionedEntityRequest2, CancellationToken.None);
            });

        }

        [Test]
        public void ValidateAddSanctionedEntity_Throws()
        {
            _databaseRepository.CreateSanctionedEntityAsync(sanctionedEntity, CancellationToken.None).ConfigureAwait(false);
            _databaseRepository.CreateSanctionedEntityAsync(sanctionedEntity2, CancellationToken.None).ConfigureAwait(false);

            Assert.ThrowsAsync<InvalidOperationException>(async () =>
            {
                await _databaseRepository.ValidateAddSanctionedEntityAsync(sanctionedEntityRequest3, CancellationToken.None);
            });

        }
    }
}
