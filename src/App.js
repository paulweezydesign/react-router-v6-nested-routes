import 'twin.macro';
import tw from 'twin.macro';
const Two = ({ hasHover }) => (
  <div css={[tw`border border-solid border-black`, hasHover && tw`hover:border-blue-300`]}>Two</div>
);
const One = () => <div tw="text-blue-300">One</div>;

function App() {
  
  return(
  <section> 

    <main>
     
    <h2>React Router 6 Tutorial!</h2>
    <One />
    <Two />
    </main>
</section>
  );
}

export default App;
