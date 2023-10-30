using Microsoft.Playwright;
using System.Diagnostics;

namespace ajg_technical_interview.UI.Tests.Drivers
{
    public class Driver : IDisposable
    {
        private readonly Task<IPage> _page;
        private IBrowser? _browser;

        public Driver()
        {
            _page = InitializePlaywright();
        }

        public IPage Page => _page.Result;

        public void Dispose()
        {
            _browser?.CloseAsync();
        }

        private async Task<IPage> InitializePlaywright()
        {
            //Playwright
            var playwright = await Playwright.CreateAsync();
            var browserOptions = new BrowserTypeLaunchOptions();

            if (Debugger.IsAttached)
            {
                browserOptions.Headless = false;
                browserOptions.SlowMo = 1000; //1 sec
            }

            //Browser
            _browser = await playwright.Chromium.LaunchAsync(browserOptions);

            //Page
            return await _browser.NewPageAsync();
        }
    }
}
