using ajg_technical_interview.UI.Tests.Drivers;
using Microsoft.Playwright;

namespace FullStackTest.Tests.Pages
{
    public class BasePageInteractions
    {
        private readonly Driver _driver;

        public BasePageInteractions(Driver driver)
        {
            _driver = driver;
        }
        public async Task EnterInputValue(ILocator locator, string value) => await locator.FillAsync(value);
        public async Task ClickButton(ILocator locator, bool isForce = false) => await locator.ClickAsync(new LocatorClickOptions() { Force = isForce });
        public async Task ClickButtonWithText(string btnText) => await _driver.Page.GetByRole(AriaRole.Button, new() { NameString = btnText })
                                                                                .ClickAsync(new LocatorClickOptions() { Force = true });
        public async Task<bool> ElementExists(ILocator locator) => await locator.CountAsync() > 0;
        public string GetCurrentPageUrl() => _driver.Page.Url;
        public async Task WaitForUrl(string url) => await _driver.Page.WaitForURLAsync(url);
    }
}
