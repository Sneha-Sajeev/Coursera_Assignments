using System.ComponentModel.DataAnnotations;
namespace EventEaseApplication.Models{
    public class EventDetails{
        [Required (ErrorMessage ="Name is required")]
        public string Name { get; set; }
        
        [Required (ErrorMessage ="{Place is required")]
        public string Place { get; set; }
        public string Date { get; set; }
    }
}