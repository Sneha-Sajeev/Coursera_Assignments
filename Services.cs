using EventEaseApplication.Models;
namespace EventEaseApplication.Services
{
    public class EventServices
    {
        private List<EventDetails> events=new List<EventDetails>();
        public void AddEvent(EventDetails event1)
        {
            if(events==null)
            {
                events=new List<EventDetails>();
            }
            events.Add(event1);
        }
        public List<EventDetails> GetAllEvents()
        {
            return events;
        }
    }
}