using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class SeedBooks : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "Id", "Author", "Isbn", "PublicationDate", "Title" },
                values: new object[,]
                {
                    { 1, "Author 1", "ISBN0001", new DateTime(2020, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Book 1" },
                    { 2, "Author 2", "ISBN0002", new DateTime(2020, 2, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Book 2" },
                    { 3, "Author 3", "ISBN0003", new DateTime(2020, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Book 3" },
                    { 4, "Author 4", "ISBN0004", new DateTime(2020, 4, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Book 4" },
                    { 5, "Author 5", "ISBN0005", new DateTime(2020, 5, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Book 5" },
                    { 6, "Author 6", "ISBN0006", new DateTime(2020, 6, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Book 6" },
                    { 7, "Author 7", "ISBN0007", new DateTime(2020, 7, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Book 7" },
                    { 8, "Author 8", "ISBN0008", new DateTime(2020, 8, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Book 8" },
                    { 9, "Author 9", "ISBN0009", new DateTime(2020, 9, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Book 9" },
                    { 10, "Author 10", "ISBN0010", new DateTime(2020, 10, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Book 10" },
                    { 11, "Author 11", "ISBN0011", new DateTime(2020, 11, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Book 11" },
                    { 12, "Author 12", "ISBN0012", new DateTime(2020, 12, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Book 12" },
                    { 13, "Author 13", "ISBN0013", new DateTime(2021, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Book 13" },
                    { 14, "Author 14", "ISBN0014", new DateTime(2021, 2, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Book 14" },
                    { 15, "Author 15", "ISBN0015", new DateTime(2021, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Book 15" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Books",
                keyColumn: "Id",
                keyValue: 15);
        }
    }
}
