import './index.css'
import './App.css'
import TwitterFollowCard from './Components/TwitterFollowCard'

// eslint-disable-next-line space-before-function-paren
function App() {
  const users = [
    {
      userName: 'sebaspetit',
      name: 'Sebastian Petit',
      isFollowing: true
    },
    {
      userName: 'sbellosos',
      name: 'Sebastian Belloso',
      isFollowing: false
    },
    {
      userName: 'Cristianirg',
      name: 'Cristian Iriarte',
      isFollowing: false
    }

  ]

  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

export default App
