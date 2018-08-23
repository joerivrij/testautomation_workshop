﻿using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace backend_users
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .UseUrls("http://0.0.0.0:4242")
                .Build();
    }
}
