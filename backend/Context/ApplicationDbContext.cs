using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {}

        public DbSet<Book> Books { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Seed 15 books
            modelBuilder.Entity<Book>().HasData(
                new Book { Id = 1, Title = "Book 1", Author = "Author 1", Isbn = "ISBN0001", PublicationDate = new DateTime(2020,1,1) },
                new Book { Id = 2, Title = "Book 2", Author = "Author 2", Isbn = "ISBN0002", PublicationDate = new DateTime(2020,2,1) },
                new Book { Id = 3, Title = "Book 3", Author = "Author 3", Isbn = "ISBN0003", PublicationDate = new DateTime(2020,3,1) },
                new Book { Id = 4, Title = "Book 4", Author = "Author 4", Isbn = "ISBN0004", PublicationDate = new DateTime(2020,4,1) },
                new Book { Id = 5, Title = "Book 5", Author = "Author 5", Isbn = "ISBN0005", PublicationDate = new DateTime(2020,5,1) },
                new Book { Id = 6, Title = "Book 6", Author = "Author 6", Isbn = "ISBN0006", PublicationDate = new DateTime(2020,6,1) },
                new Book { Id = 7, Title = "Book 7", Author = "Author 7", Isbn = "ISBN0007", PublicationDate = new DateTime(2020,7,1) },
                new Book { Id = 8, Title = "Book 8", Author = "Author 8", Isbn = "ISBN0008", PublicationDate = new DateTime(2020,8,1) },
                new Book { Id = 9, Title = "Book 9", Author = "Author 9", Isbn = "ISBN0009", PublicationDate = new DateTime(2020,9,1) },
                new Book { Id = 10, Title = "Book 10", Author = "Author 10", Isbn = "ISBN0010", PublicationDate = new DateTime(2020,10,1) },
                new Book { Id = 11, Title = "Book 11", Author = "Author 11", Isbn = "ISBN0011", PublicationDate = new DateTime(2020,11,1) },
                new Book { Id = 12, Title = "Book 12", Author = "Author 12", Isbn = "ISBN0012", PublicationDate = new DateTime(2020,12,1) },
                new Book { Id = 13, Title = "Book 13", Author = "Author 13", Isbn = "ISBN0013", PublicationDate = new DateTime(2021,1,1) },
                new Book { Id = 14, Title = "Book 14", Author = "Author 14", Isbn = "ISBN0014", PublicationDate = new DateTime(2021,2,1) },
                new Book { Id = 15, Title = "Book 15", Author = "Author 15", Isbn = "ISBN0015", PublicationDate = new DateTime(2021,3,1) }
            );
        }
    }
}
