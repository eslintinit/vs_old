import { objectType } from 'nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.username()
    t.model.fullname()
    t.model.email()
    t.model.bio()
    t.model.social()
    t.model.image()
    t.model.blockedCommunities()
    t.model.blockedChannels()
    t.model.blocked()
    t.model.owner()
    t.model.isOnline()
    t.model.lastSeenAt()
    t.model.communitiesOwned({ pagination: false })
    t.model.communitiesFollowed({ pagination: false })
    t.model.channels({ pagination: false })
    t.model.roles({ pagination: false })
  },
})
