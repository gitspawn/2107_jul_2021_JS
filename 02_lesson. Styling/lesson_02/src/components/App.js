import React from "react-dom";
// import Section from "./Section";
// import Product from "./Product";
import BookList from "../components/Booklist";
import BasicButtons from "./Buttons";
// import booksFromJson from "../books.json";

import booksFromJson from "../books.json";

let App = () => {
    // return <BookList books={booksFromJson} />;
    return <BasicButtons></BasicButtons>;
};

export default App;

// let App = () => {
//     return (
//         <div
//         // style={{
//         //     backgroundColor: "lightgrey",
//         //     outline: "1px solid yellow",
//         // }}
//         >
//             <Section>
//                 <Product name="Pizza carbonara" price={15} qty={10} />
//             </Section>
//             <Section title="Популярные товары">
//                 <Product
//                     name="Kebab"
//                     price={10}
//                     imageUrl="https://images.pexels.com/photos/604660/pexels-photo-604660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//                     qty={50}
//                 />
//             </Section>
//         </div>
//     );
// };

// export default App;

// import React from "react-dom";
// import Section from "./Section";
// import Product from "./Product";
// import BookList from "./BookList";
// import booksFromJson from "../books.json";

// let arr = [10, 20, 30, 40, 50];
// let friends = ["Vova", "Sara", "Bob", "Mike"];
// let friends = [];

// let favoriteBooks = [
//     { id: "id1", title: "Harry Potter", qty: 10 },
//     { id: "id2", title: "The Call of Ctulhu", qty: 10 },
//     { id: "id3", title: "Hobbit", qty: 10 },
//     { id: "id4", title: "Black Arrow", qty: 10 },
// ];

// let App = () => {
//     return (
//         <div>
//             {/* <BookList books={favoriteBooks} /> */}
//             <BookList books={booksFromJson} />
//         </div>

//         // <div>
//         //     <p>
//         //         {friends.length > 0 && (
//         //             <Section>
//         //                 <Product name="Pizza carbonara" price={15} qty={10} />
//         //             </Section>
//         //         )}
//         //     </p>
//         // </div>
//     );
// };

// export default App;
