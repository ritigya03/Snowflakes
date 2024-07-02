// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/card.jsx'
const artItems = [
  {
    title: "Starry Night",
    price: 2000000,
    desc: "A famous painting by Vincent van Gogh, depicting a night sky filled with swirling clouds, stars, and a bright crescent moon.",
    img: "https://th.bing.com/th/id/OIP.Gg7wqCmMxYEryHWZL0MPwAHaEK?w=208&h=117&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    status: 'sold'
  },
  {
    title: "The Persistence of Memory",
    price: 1500000,
    desc: "A surreal painting by Salvador Dalí, featuring melting clocks in a desert landscape.",
    img: "https://th.bing.com/th/id/OIP.Gg7wqCmMxYEryHWZL0MPwAHaEK?w=208&h=117&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    status: 'available'
  },
  {
    title: "Mona Lisa",
    price: 5000000,
    desc: "A portrait painting by Leonardo da Vinci, known for the subject's enigmatic expression.",
    img: "https://th.bing.com/th/id/OIP.Gg7wqCmMxYEryHWZL0MPwAHaEK?w=208&h=117&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    status: 'available'
  },
  {
    title: "The Scream",
    price: 3000000,
    desc: "An iconic painting by Edvard Munch, expressing intense emotion with a figure holding its face and screaming.",
    img: "https://th.bing.com/th/id/OIP.Gg7wqCmMxYEryHWZL0MPwAHaEK?w=208&h=117&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    status: 'sold'
  },
  {
    title: "Girl with a Pearl Earring",
    price: 1800000,
    desc: "A painting by Johannes Vermeer, portraying a young girl wearing a pearl earring and a headscarf.",
    img: "https://th.bing.com/th/id/OIP.Gg7wqCmMxYEryHWZL0MPwAHaEK?w=208&h=117&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    status: 'sold'
  },
  {
    title: "Guernica",
    price: 2500000,
    desc: "A mural-sized painting by Pablo Picasso, depicting the horrors of war and the bombing of Guernica during the Spanish Civil War.",
    img: "https://th.bing.com/th/id/OIP.Gg7wqCmMxYEryHWZL0MPwAHaEK?w=208&h=117&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    status: 'available'
  },
  {
    title: "The Birth of Venus",
    price: 2200000,
    desc: "A painting by Sandro Botticelli, showing the goddess Venus emerging from the sea on a shell.",
    img: "https://th.bing.com/th/id/OIP.Gg7wqCmMxYEryHWZL0MPwAHaEK?w=208&h=117&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    status: 'sold'
  },
  {
    title: "The Last Supper",
    price: 4500000,
    desc: "A mural painting by Leonardo da Vinci, representing the scene of Jesus' last supper with his disciples.",
    img: "https://th.bing.com/th/id/OIP.Gg7wqCmMxYEryHWZL0MPwAHaEK?w=208&h=117&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    status: 'available'
  },
  {
    title: "The Creation of Adam",
    price: 4000000,
    desc: "A fresco painting by Michelangelo, part of the Sistine Chapel ceiling, depicting God giving life to Adam.",
    img: "https://th.bing.com/th/id/OIP.Gg7wqCmMxYEryHWZL0MPwAHaEK?w=208&h=117&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    status: 'available'
  }

];


ReactDOM.createRoot(document.getElementById('root')).render(

  <>
  <App />
  <div className='container'> 
  {
    artItems.map((item)=>{
      return <Card title = {item.title} img = {item.img} price = {item.price} desc = {item.desc} status = {item.status} />
    })
  }
  </div>
  
  </>

)
