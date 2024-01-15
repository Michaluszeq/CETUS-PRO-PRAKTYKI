using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Back.Migrations
{
    /// <inheritdoc />
    public partial class Init4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_School_Subjects_School_SubjectsId",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_Reviews_School_SubjectsId",
                table: "Reviews");

            migrationBuilder.RenameColumn(
                name: "Teachers",
                table: "School_Subjects",
                newName: "Teacher");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Teacher",
                table: "School_Subjects",
                newName: "Teachers");

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_School_SubjectsId",
                table: "Reviews",
                column: "School_SubjectsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_School_Subjects_School_SubjectsId",
                table: "Reviews",
                column: "School_SubjectsId",
                principalTable: "School_Subjects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
