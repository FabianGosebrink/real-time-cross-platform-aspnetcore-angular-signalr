﻿using FoodAPICore.Entities;
using FoodAPICore.Models;
using System;
using System.Threading.Tasks;

namespace FoodAPICore.Services
{
    public class EnsureDatabaseDataService : IEnsureDatabaseDataService
    {
        public async Task EnsureSeedData(FoodDbContext context)
        {
            context.Database.EnsureCreated();

            context.FoodItems.Add(new FoodItem() { Calories = 1000, Name = "Lasagne", Type="Main", Created = DateTime.Now });
            context.FoodItems.Add(new FoodItem() { Calories = 1100, Name = "Hamburger", Type = "Main", Created = DateTime.Now });
            context.FoodItems.Add(new FoodItem() { Calories = 1200, Name = "Spaghetti", Type = "Main", Created = DateTime.Now });
            context.FoodItems.Add(new FoodItem() { Calories = 1300, Name = "Pizza", Type = "Main", Created = DateTime.Now });

            await context.SaveChangesAsync();
        }
    }
}
