using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;

namespace ajg_technical_interview_tests.Extensions
{
    internal static class HttpExtensions
    {
        public static readonly JsonSerializerOptions JsonOptions = new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };
         
        public static async Task<T> DeserializeJsonAsync<T>(this HttpResponseMessage response) =>
            await JsonSerializer.DeserializeAsync<T>(
                await response.Content.ReadAsStreamAsync(),
                JsonOptions
            );

        public static async Task<T> GetAsJsonAsync<T>(this HttpClient httpClient, string url) =>
            await (await httpClient.GetStreamAsync(url)).DeserializeJsonStreamAsync<T>();

        public static async Task<T> DeserializeJsonStreamAsync<T>(this Stream stream) =>
            await JsonSerializer.DeserializeAsync<T>(stream, JsonOptions);

        public static async Task<HttpResponseMessage> PostAsJsonAsync<T>(this HttpClient httpClient,
            string url, T data) =>
            await httpClient.PostAsync(url, await GetJsonStream(data));
          

        private static async Task<StreamContent> GetJsonStream<T>(T data)
        {
            var stream = new MemoryStream();
            await JsonSerializer.SerializeAsync(stream, data, JsonOptions);
            var content = new StreamContent(stream);
            content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            return content;
        }
    }
}
