using ajg_technical_interview.UI.Tests.Pages;
using TechTalk.SpecFlow;
using TechTalk.SpecFlow.Assist;

namespace ajg_technical_interview.UI.Tests.StepDefinitions
{
    [Binding]
    public sealed class SanctionedEntitySteps
    {        
        private readonly SanctionedEntityPage _page;
        public SanctionedEntitySteps(SanctionedEntityPage page)
        {
            _page = page;
        }

        [When(@"I am on home page")]
        public async Task WhenIAmOnHomePage()
        {
            await _page.NavigateToUrl("https://localhost:44439");
        }

        [When(@"I navigate to sanctioned entity page")]
        public async Task WhenINavigateToSanctionedEntityPage()
        {
            await _page.NavigateToUrl("https://localhost:44334/sanctioned-entities");
        }

        [Then(@"sanctioned entity list is diplayed with following table headers")]
        public async Task ThenSanctionedEntityListIsDiplayedWithFollowingTableHeaders(Table table)
        {
            dynamic data = table.CreateDynamicInstance();
            string tableHeaders = data.TableHeaders;
            foreach (var header in tableHeaders.Split(','))
            {
                await _page.EntityTableHeaderExists(header.Replace("\'", ""));
            }
        }

        [Then(@"'([^']*)' button is showing")]
        public async Task ThenButtonIsShowing(string btnName)
        {
            await _page.ButtonWithNameExists(btnName);
        }

        [Then(@"table pagination is showing")]
        public void ThenTablePaginationIsShowing()
        {
            Assert.True(_page.EntityTablePaginationExists());
        }

        [Then(@"table footer is showing total entity count")]
        public void ThenTableFooterIsShowingTotalEntityCount()
        {
            Assert.True(_page.EntityTableFooterExists());
        }



    }
}