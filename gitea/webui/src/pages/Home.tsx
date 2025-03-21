import * as React from 'react'
import { Link } from 'react-router-dom'
import { Activity, Users, GitBranch, MessageCircle, Bell, Users2 } from 'lucide-react'

// Mock data - will be replaced with real data from blockchain/API
const stats = {
  repositories: {
    total: 156,
    active: 45,
    new: 12
  },
  community: {
    developers: 324,
    activeContributors: 89,
    coreMembers: 15
  },
  governance: {
    activeProposals: 8,
    pendingReviews: 3,
    participation: "95%"
  }
}

const recentActivity = [
  {
    type: 'governance',
    title: 'New Governance Proposal',
    description: 'Protocol upgrade discussion started',
    time: '2h ago',
    icon: Activity
  },
  {
    type: 'contract',
    title: 'Smart Contract Update',
    description: 'Major security patch merged',
    time: '5h ago',
    icon: GitBranch
  },
  {
    type: 'community',
    title: 'New Community Member',
    description: 'Core contributor joined',
    time: '1d ago',
    icon: Users
  }
]

const Home: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Project Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stats-card glow-effect">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2 text-white">Total Repositories</h3>
              <p className="text-3xl font-bold gradient-text">
                {stats.repositories.total}
              </p>
              <p className="text-muted-foreground mt-1">
                {stats.repositories.active} active this week
              </p>
              <p className="text-muted-foreground">
                {stats.repositories.new} new this month
              </p>
            </div>
            <GitBranch className="w-6 h-6 text-primary/60" />
          </div>
          <Link
            to="/repositories"
            className="glass-button mt-4 w-full flex items-center justify-center group"
          >
            View Details
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="stats-card glow-effect">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2 text-white">Community</h3>
              <p className="text-3xl font-bold gradient-text">
                {stats.community.developers}
              </p>
              <p className="text-muted-foreground mt-1">
                {stats.community.activeContributors} active contributors
              </p>
              <p className="text-muted-foreground">
                {stats.community.coreMembers} core members
              </p>
            </div>
            <Users className="w-6 h-6 text-primary/60" />
          </div>
          <Link
            to="/community"
            className="glass-button mt-4 w-full flex items-center justify-center group"
          >
            View Members
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="stats-card glow-effect">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2 text-white">Governance</h3>
              <p className="text-3xl font-bold gradient-text">
                {stats.governance.activeProposals}
              </p>
              <p className="text-muted-foreground mt-1">
                {stats.governance.pendingReviews} pending reviews
              </p>
              <p className="text-muted-foreground">
                {stats.governance.participation} participation
              </p>
            </div>
            <Activity className="w-6 h-6 text-primary/60" />
          </div>
          <Link
            to="/governance"
            className="glass-button mt-4 w-full flex items-center justify-center group"
          >
            View Proposals
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="activity-item group">
              <activity.icon className="w-5 h-5 text-primary/60" />
              <div className="flex-1">
                <p className="font-medium text-white">{activity.title}</p>
                <p className="text-muted-foreground">{activity.description}</p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
              <Link 
                to="#" 
                className="text-primary hover:text-primary/80 transform transition-transform group-hover:translate-x-1"
              >
                →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Discussions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-white">Hot Topics</h3>
            <MessageCircle className="w-5 h-5 text-primary/60" />
          </div>
          <p className="text-muted-foreground">3 active discussions</p>
          <p className="text-muted-foreground mb-4">15 new replies today</p>
          <Link
            to="/community/discussions"
            className="glass-button w-full flex items-center justify-center group"
          >
            View Trending
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-white">Announcements</h3>
            <Bell className="w-5 h-5 text-primary/60" />
          </div>
          <p className="text-muted-foreground">Platform updates</p>
          <p className="text-muted-foreground mb-4">New features released</p>
          <Link
            to="/community/announcements"
            className="glass-button w-full flex items-center justify-center group"
          >
            Read More
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-white">Developer Groups</h3>
            <Users2 className="w-5 h-5 text-primary/60" />
          </div>
          <p className="text-muted-foreground">5 active working groups</p>
          <p className="text-muted-foreground mb-4">2 new proposals</p>
          <Link
            to="/community/groups"
            className="glass-button w-full flex items-center justify-center group"
          >
            Join Groups
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home