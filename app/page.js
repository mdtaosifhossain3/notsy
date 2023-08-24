import { CardNote, Search } from "@/Components";
import {Container } from "@mui/material";

export default function Home() {

  return (
    <main>
      <div>

        {/* Search Bar */}
        <Search />
        {/* Card */}
        <Container
        maxWidth="lg"
        
        sx={{margin:"6rem auto",display:"columns",columnCount:{sm:"2",md:"3"}}}
        >
          <CardNote />
          <CardNote
            title="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like. This impressive paella is a perfect party dish
          and a fun meal to cook together with your guests. Add 1 cup of frozen
          peas along with the mussels, if you like.f"
          />
          <CardNote />
          <CardNote />
          <CardNote />
          <CardNote
            title="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like. This impressive paella is a perfect party dish
          and a fun meal to cook together with your guests. Add 1 cup of frozen
          peas along with the mussels, if you like.f"
          />
          <CardNote />
          <CardNote
            title="This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like. This impressive paella is a perfect party dish
          and a fun meal to cook together with your guests. Add 1 cup of frozen
          peas along with the mussels, if you like.f"
          />
        </Container>
      </div>
    </main>
  );
}
