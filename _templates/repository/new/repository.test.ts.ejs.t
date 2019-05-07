---
to: test/unit/repositories/<%= name %>Repository.test.ts
---
import Vue from 'vue'
import Vuex from 'vuex'
import createStore from '@/store'
import { <%= name %>RepositoryFactory } from '@/repositories/<%= name %>Repository'

Vue.use(Vuex)

describe('<%= name %>Repository', () => {
})
