using ajg_technical_interview.Services;
//using Microsoft.AspNetCore.SpaServices.AngularCli;

string CorsSpec = "CorsSpec";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddSingleton<IDatabaseService, DatabaseService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: CorsSpec,
                      builder =>
                      {
                          builder.AllowAnyOrigin();
                          builder.AllowAnyMethod();
                          builder.AllowAnyHeader();
                      });
});

builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "ClientApp/dist/angularapp";
});

var app = builder.Build();

app.UseSpaStaticFiles();

app.UseCors(CorsSpec);

app.UseSpa(spa =>
{
    // To learn more about options for serving an Angular SPA from ASP.NET Core,
    // see https://go.microsoft.com/fwlink/?linkid=864501

    spa.Options.SourcePath = "ClientApp";

    // if (env.IsDevelopment())
    //   {
    //        spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");

    //                         spa.UseAngularCliServer(npmScript: "start");
    //  }
});



//app.UseSpaStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
//else
//{
//    app.UseDefaultFiles();
//    app.UseStaticFiles();
//}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
