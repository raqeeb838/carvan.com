let header = document.getElementById("header");

header.innerHTML = `

<nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container">
                    <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="about.html">About Us</a>
                            </li>
                              <li class="nav-item">
                                <a class="nav-link" href="brands.html">Brands</a>
                            </li>
                            <li class="nav-item dropdown z-3">
                                <a class="nav-link dropdown-toggle" href="rang_of_cars.html" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Range of Cars
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="small_car.html">Small Car</a></li>
                                    <li><a class="dropdown-item" href="sedan.html">SEDAN</a></li>
                                    <li><a class="dropdown-item" href="van.html">VAN</a></li>
                                    <li><a class="dropdown-item" href="jeeps.html">JEEPS</a></li><hr>
                                    <li><a class="dropdown-item all_cars" href="rang_of_cars.html">ALL CARS</a></li>

                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="pre_owned_cars.html">PreOwned Cars</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="contact_us.html">Contact</a>
                            </li>
                            
                        </ul>
                        <a href="login_page.html" class="btn contact_button contact-btn">Login</a>
                    </div>
                </div>
            </nav>

`;
