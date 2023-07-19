﻿using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace TabloidFullStack.Models
{
    public class Category
    {
        public int Id { get; set; }
        
        [Required]
        public string Name { get; set; }
    }
}
