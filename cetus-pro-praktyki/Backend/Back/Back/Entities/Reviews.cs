namespace Back.Entities
{
    public class Reviews
    {
        public int Id { get; set; }
        public string Author { get; set; }

        public string Teacher { get; set; }

        public string Subject { get; set; }
        public string Mark { get; set; }
        public string Data { get; set; }
        public string Description { get; set; }
        public int School_SubjectsId { get; set;}
       

    }
}