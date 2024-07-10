<template>
  <nav class="navbar">
    <router-link to="/" class="logo">
      <span class="texto-destacado1">COMIDAS</span>
      <span class="texto-destacado2">ECUATORIANAS</span>
    </router-link>
    <button class="menu-toggle" @click="toggleMenu">☰</button>
    <ul :class="{'menu': true, 'menu-open': isMenuOpen}">
      <li class="menu-item">HOME</li>
      <li class="menu-item">TIPS</li>
      <li class="menu-item">ABOUT US</li>
      <li class="menu-item">SERVICE</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'GymNavbar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  font-family: 'Rede', sans-serif;
  font-size: 14px;
  letter-spacing: 4px;
  box-shadow: 2px 0 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  width: 97.9%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #ffffff;
}

.logo {
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: center;
}

.menu {
  list-style-type: none;
  display: flex;
  gap: 20px;
}

.menu-item {
  color: #5d5d5d;
  cursor: pointer;
  padding: 10px 30px;
  animation: slideInFromRight 1s ease-in-out forwards;
}

.texto-destacado1,
.texto-destacado2 {
  display: inline-block;
  animation: letterAppear 1s ease-in-out forwards;
}

.texto-destacado1 {
  padding: 0 15px;
  color: white;
  background-color: #5d5d5d;
  border: 2px solid #5d5d5d;
  animation: letterAppear 2s ease-in-out forwards;
  animation-delay: 0.1s;
}

.texto-destacado2 {
  padding: 0 15px;
  color: black;
  background-color: white;
  border: 2px solid #5d5d5d;
  animation: slideInFromRight 2s ease-in-out forwards;
  animation-delay: 0.2s;
}

.logo{
  font-size: 25px;
  align-items: center;
  margin-left: 100px;
}

.navbar li:hover {
  background-color: #5d5d5d;
  color: white;
  border-radius: 20px;
}

.menu-item:hover {
  animation: slide 0.3s ease-in-out forwards;
}

.menu-toggle {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #5d5d5d;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(10px);
  }
}

@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes letterAppear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.navbar a {
  text-decoration: none;
}

.router-link {
  text-decoration: none;
}

/* Media Queries */
@media (max-width: 768px) {
  .menu {
    display: none;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 70px;
    right: 20px;
    background-color: #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 10px 0;
  }

  .menu-open {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }
}
</style>
