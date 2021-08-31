import { Container } from 'react-bootstrap';
import blog2 from '../imgs/seattle-blog2.png';




function AllCompanies() {
  const letters = ["#", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q", "S","T","U","V","W","X","Y","Z"]
  return (
<> 

<Container>
<h1 className="mt-huge text-center">Sort by your favorite brand to find exactly what you're looking for a breeze</h1> 
<hr></hr>
<h1 className="mt-4 text-center mb-2"># A B C D E F G H I J K L M N O P Q R S T U V W X Y Z  </h1>


<ul class="list-group">
  <li class="list-group-item border-secondary my-2">#</li>
  <li class="list-group-item my-2 border-secondary">A</li>
  <li class="list-group-item my-2 border-secondary">B</li>
  <li class="list-group-item my-2 border-secondary">C</li>
  <li class="list-group-item my-2 border-secondary">D</li>
  <li class="list-group-item my-2 border-secondary">E</li>
  <li class="list-group-item my-2 border-secondary">F</li>
  <li class="list-group-item my-2 border-secondary">G</li>
  <li class="list-group-item my-2 border-secondary">H</li>
  <li class="list-group-item my-2 border-secondary">I</li>
  <li class="list-group-item my-2 border-secondary">J</li>
  <li class="list-group-item my-2 border-secondary">K</li>
  <li class="list-group-item my-2 border-secondary">L</li>
  <li class="list-group-item my-2 border-secondary">M</li>
  <li class="list-group-item my-2 border-secondary">N</li>
  <li class="list-group-item my-2 border-secondary">O</li>
  <li class="list-group-item my-2 border-secondary">P</li>
  <li class="list-group-item my-2 border-secondary">Q</li>
  <li class="list-group-item my-2 border-secondary">R</li>
  <li class="list-group-item my-2 border-secondary">S</li>
  <li class="list-group-item my-2 border-secondary">T</li>
  <li class="list-group-item my-2 border-secondary">U</li>
  <li class="list-group-item my-2 border-secondary">V</li>
  <li class="list-group-item my-2 border-secondary">W</li>
  <li class="list-group-item my-2 border-secondary">X</li>
  <li class="list-group-item my-2 border-secondary">Y</li>
  <li class="list-group-item my-2 border-secondary">Z</li>
</ul>


</Container> 
</>
  );
}

export default AllCompanies;