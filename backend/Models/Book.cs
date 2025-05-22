namespace backend.Models
{
    public class Book
    {
        public int Id { get; set; } // Unique identifier
        public string Title { get; set; } = string.Empty;
        public string Author { get; set; } = string.Empty;
        public string Isbn { get; set; } = string.Empty;
        public DateTime PublicationDate { get; set; }
    }
}
