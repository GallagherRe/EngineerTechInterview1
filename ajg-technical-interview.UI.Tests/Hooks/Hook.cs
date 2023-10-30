using ajg_technical_interview.UI.Tests.Drivers;
using System.Diagnostics;
using TechTalk.SpecFlow;

namespace ajg_technical_interview.UI.Tests.Hooks
{
    [Binding]
    public class Hooks
    {
        private readonly Driver _driver;
        private static Process? _process;

        public Hooks(Driver driver)
        {
            _driver = driver;            
        }

        [BeforeTestRun]
        public static void LaunchWebSite()
        {
            var path = Path.Combine(Directory.GetCurrentDirectory(), @"..\\..\\..\\..\\ajg-technical-interview\\ajg-technical-interview.csproj");

            ProcessStartInfo ProcessInfo;

            ProcessInfo = new ProcessStartInfo("cmd.exe", "/K " + $"dotnet run --no-build --project \"{path}\"");
            ProcessInfo.CreateNoWindow = true;
            ProcessInfo.UseShellExecute = true;

            _process = Process.Start(ProcessInfo);

            Thread.Sleep(10000);
        }

        [AfterTestRun]
        public static void CleanUp()
        {
            _process?.Kill(true);
        }
    }
}
