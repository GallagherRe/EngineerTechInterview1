using NUnit.Framework;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using ajg_technical_interview.Services;
using AutoMapper;
using Moq;
using ajg_technical_interview.Repositories;
using ajg_technical_interview.Models;
using ajg_technical_interview.Models.ViewModels;
using System.Linq;
using ajg_technical_interview.Models.Requests;
using ajg_technical_interview.Validation;
using FluentValidation;
using FluentValidation.TestHelper;
using System.Threading;

namespace ajg.Tests
{
    public class DatabaseServiceTests
    {
        private DatabaseService _databaseService;
        private Mock<IMapper> _mockMapper;
        private Mock<IDatabaseRepository> _mockRepository;
        private SanctionedEntityValidator _validator;

        private static readonly SanctionedEntityWebVM sanctionedEntityVM = new SanctionedEntityWebVM()
        {
            Name = "name",
            Accepted = true,
            Domicile = "test"
        };

        private static readonly SanctionedEntity sanctionedEntity = new SanctionedEntity()
        {
            Name = "name",
            Accepted = true,
            Domicile = "test"
        };

        private static readonly SanctionedEntityWebVM sanctionedEntityVM2 = new SanctionedEntityWebVM()
        {
            Name = "name",
            Accepted = true,
            Domicile = null
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
            Domicile = null
        };

        private static readonly IList<SanctionedEntityWebVM> sanctionedEntitiesVM = new List<SanctionedEntityWebVM>() { sanctionedEntityVM };

        private static readonly IList<SanctionedEntityWebVM> sanctionedEntitiesVM2 = new List<SanctionedEntityWebVM>() { sanctionedEntityVM2 };

        private static readonly IList<SanctionedEntity> sanctionedEntities = new List<SanctionedEntity>() { sanctionedEntity };

        [SetUp]
        public void Setup()
        {
            _mockMapper = new Mock<IMapper>();
            _mockRepository = new Mock<IDatabaseRepository>();
            _databaseService = new DatabaseService(_mockRepository.Object, _mockMapper.Object);
            _validator = new SanctionedEntityValidator();
        }

        [Test]
        public void GetSanctionedEntities_Succeeds()
        {
            _mockRepository.Setup(x => x.GetSanctionedEntitiesAsync(CancellationToken.None)).Returns(Task.FromResult(sanctionedEntities));
            _mockMapper.Setup(x => x.Map<IList<SanctionedEntityWebVM>>(It.IsAny<IList<SanctionedEntity>>())).Returns(sanctionedEntitiesVM);

            var underTest = _databaseService.GetSanctionedEntitiesAsync(CancellationToken.None).GetAwaiter().GetResult();

            Assert.Contains(sanctionedEntityVM, underTest.ToList());
        }

        [Test]
        public void GetSanctionedEntityByIdAsync()
        {
            // TODO
        }

        [Test]
        public void CreateSanctionedEntity_Succeeds()
        {
            _mockRepository.Setup(x => x.CreateSanctionedEntityAsync(It.IsAny<SanctionedEntity>(), CancellationToken.None)).Returns(Task.FromResult(sanctionedEntity));
            _mockMapper.Setup(x => x.Map<SanctionedEntityWebVM>(It.IsAny<SanctionedEntity>())).Returns(sanctionedEntityVM);
            _mockMapper.Setup(x => x.Map<SanctionedEntity>(It.IsAny<AddSanctionedEntityRequest>())).Returns(sanctionedEntity);

            var underTest = _databaseService.CreateSanctionedEntityAsync(sanctionedEntityRequest, CancellationToken.None).GetAwaiter().GetResult();

            Assert.AreEqual(sanctionedEntityVM.Name, underTest.Name);
        }

        [Test]
        public void ValidationErrorForDomicile_ReturnsError()
        {
            _mockRepository.Setup(x => x.CreateSanctionedEntityAsync(It.IsAny<SanctionedEntity>(), CancellationToken.None)).Returns(Task.FromResult(sanctionedEntity));
            _mockMapper.Setup(x => x.Map<SanctionedEntityWebVM>(It.IsAny<SanctionedEntity>())).Returns(sanctionedEntityVM);
            _mockMapper.Setup(x => x.Map<SanctionedEntity>(It.IsAny<AddSanctionedEntityRequest>())).Returns(sanctionedEntity);

            var result = _validator.TestValidate(sanctionedEntityRequest2);
            result.ShouldHaveValidationErrorFor(entity => entity.Domicile);
        }

        [Test]
        public void ValidateAddSanctionedEntity_DoesNotThrow()
        {
            _mockRepository.Setup(x => x.CreateSanctionedEntityAsync(It.IsAny<SanctionedEntity>(),CancellationToken.None)).Returns(Task.FromResult(sanctionedEntity));
            _mockMapper.Setup(x => x.Map<SanctionedEntityWebVM>(It.IsAny<SanctionedEntity>())).Returns(sanctionedEntityVM);
            _mockMapper.Setup(x => x.Map<SanctionedEntity>(It.IsAny<AddSanctionedEntityRequest>())).Returns(sanctionedEntity);

            Assert.DoesNotThrowAsync(async () =>
            {
                await _databaseService.ValidateAddSanctionedEntityAsync(sanctionedEntityRequest, CancellationToken.None);
            });
        }
    }
}