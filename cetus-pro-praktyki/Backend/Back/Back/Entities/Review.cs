namespace Back.Entities
{
    public class Review
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public string Description { get; set; }
        public int School_SubjectsId { get; set;}
       

    }
}