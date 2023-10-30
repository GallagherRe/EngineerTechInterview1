using FullStackTest.Tests.Pages;
using ajg_technical_interview.UI.Tests.Drivers;
using TechTalk.SpecFlow;
using Microsoft.Playwright;

namespace ajg_technical_interview.UI.Tests.Pages;

public class SanctionedEntityPage : BasePageInteractions
{
    private readonly Driver _driver;
    public SanctionedEntityPage(Driver driver) : base(driver)
    {
        _driver = driver;
    }

    private ILocator _thEntityTable => _driver.Page.Locator("#th_entity_{0}");

    public async Task NavigateToUrl(string url) => await _driver.Page.GotoAsync(url);

    public async Task<bool> EntityTableHeaderExists(string headerName) => await ElementExists(_driver.Page.Locator($"#th_entity_{headerName}"));

    public async Task<bool> ButtonWithNameExists(string btnName) => await ElementExists(_driver.Page.Locator($"#btn_{btnName}"));

    public bool EntityTablePaginationExists() => _driver.Page.Locator(".p-paginator-current").CountAsync().Result == 1;
    public bool EntityTableFooterExists() => _driver.Page.Locator(".p-datatable-footer").CountAsync().Result == 1;

    public async Task VerifyAlertWithTextIsDisplayed(string text)
    {
        var alertElements = await _driver.Page.QuerySelectorAllAsync("xpath=//div[@role='alert']");

        foreach (var alert in alertElements)
        {
            var alertText = await alert.InnerTextAsync();
            var expectedMessage = text.Trim();
            var isMessageFound = alertText.Trim().Contains(expectedMessage, StringComparison.OrdinalIgnoreCase);

            Assert.True(isMessageFound, "Alert " + alertText);
        }
    }
}