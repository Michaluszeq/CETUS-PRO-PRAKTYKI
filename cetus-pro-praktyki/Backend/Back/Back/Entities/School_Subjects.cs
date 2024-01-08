namespace Back.Entities
{
    public class School_Subjects
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public string Teacher { get; set; }
        
        public virtual  List<Review> Reviews { get; set; }
    }
}
