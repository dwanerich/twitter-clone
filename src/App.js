import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets'


function App() {
  return (
    <>
    <div className="app">
      
        <h1>Twitter App Clone 🤖</h1>  


       {/* Sidebar */}
       <Sidebar />

       {/* Feed// */}

       <Feed />

        {/* Widgets */}

        <Widgets />


    </div>
    </>
  );
}

export default App;
