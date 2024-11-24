import BlogImage1 from "@/assets/images/blog/1.jpg";
import BlogImage2 from "@/assets/images/blog/2.jpg";
import BlogImage3 from "@/assets/images/blog/3.jpg";
import BlogImage4 from "@/assets/images/blog/4.jpg";
import BlogImage5 from "@/assets/images/blog/5.jpg";
import BlogImage6 from "@/assets/images/blog/6.jpg";

function slugify(title) {
  return title
    .toLowerCase() // Convertir en minuscules
    .trim() // Supprimer les espaces au début et à la fin
    .replace(/[\s_]+/g, "-") // Remplacer les espaces et underscores par des tirets
    .replace(/[^\w\-]+/g, ""); // Supprimer les caractères non-alphanumériques
}

export const Blogs = [
  {
    id: 1,
    image: BlogImage1,
    title: "The Impact of Artificial Intelligence on the Creative Industries",
    slug: slugify("The Impact of Artificial Intelligence on the Creative Industries"),
    date: "15/02/2025",
    article: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro itaque numquam corporis exercitationem. Voluptatem architecto vitae tenetur tempore dignissimos. Unde.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, esse assumenda quos, sunt debitis sint laudantium placeat, ut aliquam maiores exercitationem dolor inventore dignissimos enim. Et culpa eos ut nam. Praesentium repellendus nihil libero sunt, veniam repellat porro omnis neque veritatis culpa aspernatur. Aliquid debitis deserunt nam voluptate ipsum animi.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quis nobis ut maiores modi blanditiis itaque inventore id quaerat esse repellat ea ex animi voluptatem dolorum, eum iste qui nostrum nam est libero veniam non nulla rem! Ad at nobis saepe, magnam repellendus, dolores unde culpa provident delectus explicabo enim tempora. Sapiente iusto rerum autem ipsa? Fugit eveniet fuga dignissimos. Distinctio nostrum accusamus quisquam quidem doloribus veritatis, aliquam repellendus cupiditate laudantium similique at provident! Doloribus, cupiditate! Quasi similique culpa amet nesciunt temporibus ipsa quia recusandae consectetur aperiam magni officiis praesentium error in facilis, qui doloribus eum velit, illo voluptatum? Dolores.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, fugit? Adipisci animi voluptates officia aperiam ullam ipsa unde fugit soluta maiores itaque, quasi expedita dolor velit explicabo necessitatibus rem recusandae corporis enim nulla voluptate voluptatem perspiciatis odio dolorum. Perferendis, vero.",
    ],
    tag: "Tools & Framework",
  },
  {
    id: 2,
    image: BlogImage2,
    title: "Mastering Social Media: Leveraging Platforms for Client Success",
    slug: slugify("Mastering Social Media: Leveraging Platforms for Client Success"),
    date: "15/02/2025",
    article: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro itaque numquam corporis exercitationem. Voluptatem architecto vitae tenetur tempore dignissimos. Unde.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, esse assumenda quos, sunt debitis sint laudantium placeat, ut aliquam maiores exercitationem dolor inventore dignissimos enim. Et culpa eos ut nam. Praesentium repellendus nihil libero sunt, veniam repellat porro omnis neque veritatis culpa aspernatur. Aliquid debitis deserunt nam voluptate ipsum animi.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quis nobis ut maiores modi blanditiis itaque inventore id quaerat esse repellat ea ex animi voluptatem dolorum, eum iste qui nostrum nam est libero veniam non nulla rem! Ad at nobis saepe, magnam repellendus, dolores unde culpa provident delectus explicabo enim tempora. Sapiente iusto rerum autem ipsa? Fugit eveniet fuga dignissimos. Distinctio nostrum accusamus quisquam quidem doloribus veritatis, aliquam repellendus cupiditate laudantium similique at provident! Doloribus, cupiditate! Quasi similique culpa amet nesciunt temporibus ipsa quia recusandae consectetur aperiam magni officiis praesentium error in facilis, qui doloribus eum velit, illo voluptatum? Dolores.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, fugit? Adipisci animi voluptates officia aperiam ullam ipsa unde fugit soluta maiores itaque, quasi expedita dolor velit explicabo necessitatibus rem recusandae corporis enim nulla voluptate voluptatem perspiciatis odio dolorum. Perferendis, vero.",
    ],
    tag: "Startups",
  },
  {
    id: 3,
    image: BlogImage3,
    title: "Demystifying SEO: Strategies for Boosting Digital Visibility",
    slug: slugify("Demystifying SEO: Strategies for Boosting Digital Visibility"),
    date: "20/05/2025",
    article: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro itaque numquam corporis exercitationem. Voluptatem architecto vitae tenetur tempore dignissimos. Unde.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, esse assumenda quos, sunt debitis sint laudantium placeat, ut aliquam maiores exercitationem dolor inventore dignissimos enim. Et culpa eos ut nam. Praesentium repellendus nihil libero sunt, veniam repellat porro omnis neque veritatis culpa aspernatur. Aliquid debitis deserunt nam voluptate ipsum animi.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quis nobis ut maiores modi blanditiis itaque inventore id quaerat esse repellat ea ex animi voluptatem dolorum, eum iste qui nostrum nam est libero veniam non nulla rem! Ad at nobis saepe, magnam repellendus, dolores unde culpa provident delectus explicabo enim tempora. Sapiente iusto rerum autem ipsa? Fugit eveniet fuga dignissimos. Distinctio nostrum accusamus quisquam quidem doloribus veritatis, aliquam repellendus cupiditate laudantium similique at provident! Doloribus, cupiditate! Quasi similique culpa amet nesciunt temporibus ipsa quia recusandae consectetur aperiam magni officiis praesentium error in facilis, qui doloribus eum velit, illo voluptatum? Dolores.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, fugit? Adipisci animi voluptates officia aperiam ullam ipsa unde fugit soluta maiores itaque, quasi expedita dolor velit explicabo necessitatibus rem recusandae corporis enim nulla voluptate voluptatem perspiciatis odio dolorum. Perferendis, vero.",
    ],
    tag: "Machine Learning",
  },
  {
    id: 4,
    image: BlogImage4,
    title: "Content is King: Crafting Engaging Digital Content for Clients",
    slug: slugify("Content is King: Crafting Engaging Digital Content for Clients"),
    date: "15/02/2025",
    article: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro itaque numquam corporis exercitationem. Voluptatem architecto vitae tenetur tempore dignissimos. Unde.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, esse assumenda quos, sunt debitis sint laudantium placeat, ut aliquam maiores exercitationem dolor inventore dignissimos enim. Et culpa eos ut nam. Praesentium repellendus nihil libero sunt, veniam repellat porro omnis neque veritatis culpa aspernatur. Aliquid debitis deserunt nam voluptate ipsum animi.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quis nobis ut maiores modi blanditiis itaque inventore id quaerat esse repellat ea ex animi voluptatem dolorum, eum iste qui nostrum nam est libero veniam non nulla rem! Ad at nobis saepe, magnam repellendus, dolores unde culpa provident delectus explicabo enim tempora. Sapiente iusto rerum autem ipsa? Fugit eveniet fuga dignissimos. Distinctio nostrum accusamus quisquam quidem doloribus veritatis, aliquam repellendus cupiditate laudantium similique at provident! Doloribus, cupiditate! Quasi similique culpa amet nesciunt temporibus ipsa quia recusandae consectetur aperiam magni officiis praesentium error in facilis, qui doloribus eum velit, illo voluptatum? Dolores.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, fugit? Adipisci animi voluptates officia aperiam ullam ipsa unde fugit soluta maiores itaque, quasi expedita dolor velit explicabo necessitatibus rem recusandae corporis enim nulla voluptate voluptatem perspiciatis odio dolorum. Perferendis, vero.",
    ],
    tag: "AI Revolution",
  },
  {
    id: 5,
    image: BlogImage5,
    title: "From Concept to Conversion: Optimizing for Maximum Impact",
    slug: slugify("From Concept to Conversion: Optimizing for Maximum Impact"),
    date: "15/02/2025",
    article: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro itaque numquam corporis exercitationem. Voluptatem architecto vitae tenetur tempore dignissimos. Unde.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, esse assumenda quos, sunt debitis sint laudantium placeat, ut aliquam maiores exercitationem dolor inventore dignissimos enim. Et culpa eos ut nam. Praesentium repellendus nihil libero sunt, veniam repellat porro omnis neque veritatis culpa aspernatur. Aliquid debitis deserunt nam voluptate ipsum animi.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quis nobis ut maiores modi blanditiis itaque inventore id quaerat esse repellat ea ex animi voluptatem dolorum, eum iste qui nostrum nam est libero veniam non nulla rem! Ad at nobis saepe, magnam repellendus, dolores unde culpa provident delectus explicabo enim tempora. Sapiente iusto rerum autem ipsa? Fugit eveniet fuga dignissimos. Distinctio nostrum accusamus quisquam quidem doloribus veritatis, aliquam repellendus cupiditate laudantium similique at provident! Doloribus, cupiditate! Quasi similique culpa amet nesciunt temporibus ipsa quia recusandae consectetur aperiam magni officiis praesentium error in facilis, qui doloribus eum velit, illo voluptatum? Dolores.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, fugit? Adipisci animi voluptates officia aperiam ullam ipsa unde fugit soluta maiores itaque, quasi expedita dolor velit explicabo necessitatibus rem recusandae corporis enim nulla voluptate voluptatem perspiciatis odio dolorum. Perferendis, vero.",
    ],
    tag: "Machine Learning",
  },
  {
    id: 6,
    image: BlogImage6,
    title: "The Power of Partnerships: Collaborating for Agency Success",
    slug: slugify("The Power of Partnerships: Collaborating for Agency Success"),
    date: "15/02/2025",
    article: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro itaque numquam corporis exercitationem. Voluptatem architecto vitae tenetur tempore dignissimos. Unde.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, esse assumenda quos, sunt debitis sint laudantium placeat, ut aliquam maiores exercitationem dolor inventore dignissimos enim. Et culpa eos ut nam. Praesentium repellendus nihil libero sunt, veniam repellat porro omnis neque veritatis culpa aspernatur. Aliquid debitis deserunt nam voluptate ipsum animi.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quis nobis ut maiores modi blanditiis itaque inventore id quaerat esse repellat ea ex animi voluptatem dolorum, eum iste qui nostrum nam est libero veniam non nulla rem! Ad at nobis saepe, magnam repellendus, dolores unde culpa provident delectus explicabo enim tempora. Sapiente iusto rerum autem ipsa? Fugit eveniet fuga dignissimos. Distinctio nostrum accusamus quisquam quidem doloribus veritatis, aliquam repellendus cupiditate laudantium similique at provident! Doloribus, cupiditate! Quasi similique culpa amet nesciunt temporibus ipsa quia recusandae consectetur aperiam magni officiis praesentium error in facilis, qui doloribus eum velit, illo voluptatum? Dolores.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, fugit? Adipisci animi voluptates officia aperiam ullam ipsa unde fugit soluta maiores itaque, quasi expedita dolor velit explicabo necessitatibus rem recusandae corporis enim nulla voluptate voluptatem perspiciatis odio dolorum. Perferendis, vero.",
    ],
    tag: "Machine Learning",
  },
];
