import { UserLayout, BasicLayout, RouteView } from '@/layouts'
import AutogenView from '@/views/AutogenView.vue'
// import IFramePlugin from '@/views/plugins/IFramePlugin.vue'

import account from '@/config/section/account'

function generateRouterMap (section) {
  var map = {
    name: section.name,
    path: '/' + section.name,
    hidden: section.hidden,
    // meta: { title: section.title, icon: section.icon, docHelp: Vue.prototype.$applyDocHelpMappings(section.docHelp), searchFilters: section.searchFilters },
    component: RouteView
  }

  if (section.children && section.children.length > 0) {
    map.redirect = '/' + section.children[0].name
    map.meta.permission = section.children[0].permission
    map.children = []
    for (const child of section.children) {
      if ('show' in child && !child.show()) {
        continue
      }
      var component = child.component ? child.component : AutogenView
      var route = {
        name: child.name,
        path: '/' + child.name,
        hidden: child.hidden,
        meta: {
          title: child.title,
          name: child.name,
          icon: child.icon,
          // docHelp: Vue.prototype.$applyDocHelpMappings(child.docHelp),
          permission: child.permission,
          resourceType: child.resourceType,
          filters: child.filters,
          params: child.params ? child.params : {},
          columns: child.columns,
          details: child.details,
          searchFilters: child.searchFilters,
          related: child.related,
          actions: child.actions,
          tabs: child.tabs
        },
        component: component,
        hideChildrenInMenu: true,
        children: [
          {
            path: '/' + child.name + '/:id',
            hidden: child.hidden,
            meta: {
              title: child.title,
              name: child.name,
              icon: child.icon,
              // docHelp: Vue.prototype.$applyDocHelpMappings(child.docHelp),
              permission: child.permission,
              resourceType: child.resourceType,
              params: child.params ? child.params : {},
              details: child.details,
              searchFilters: child.searchFilters,
              related: child.related,
              tabs: child.tabs,
              actions: child.actions ? child.actions : []
            },
            component: component
          }
        ]
      }
      if (child.actions) {
        child.actions.forEach(function (action) {
          if (!action.component || !action.api) {
            return
          }
          map.children.push({
            name: action.api,
            icon: child.icon,
            hidden: true,
            path: '/action/' + action.api,
            meta: {
              title: child.title,
              name: child.name,
              permission: [action.api]
            },
            component: action.component
          })
        })
      }
      map.children.push(route)
    }
  } else {
    map.component = section.component ? section.component : AutogenView
    map.hideChildrenInMenu = true

    map.meta.name = section.name
    map.meta.permission = section.permission
    map.meta.resourceType = section.resourceType
    map.meta.details = section.details
    map.meta.actions = section.actions
    map.meta.filters = section.filters
    map.meta.treeView = section.treeView ? section.treeView : false
    map.meta.tabs = section.tabs

    map.children = [{
      path: '/' + section.name + '/:id',
      actions: section.actions ? section.actions : [],
      meta: {
        title: section.title,
        name: section.name,
        icon: section.icon,
        // docHelp: Vue.prototype.$applyDocHelpMappings(section.docHelp),
        hidden: section.hidden,
        permission: section.permission,
        resourceType: section.resourceType,
        params: section.params ? section.params : {},
        details: section.details,
        related: section.related,
        searchFilters: section.searchFilters,
        tabs: section.tabs,
        actions: section.actions ? section.actions : []
      },
      component: section.component ? section.component : AutogenView
    }]
  }

  if (section.component) {
    map.component = section.component
  }

  if (section.permission) {
    map.meta.permission = section.permission
  }

  if (section.columns) {
    map.meta.columns = section.columns
  }

  if (section.actions) {
    map.meta.actions = section.actions
  }

  return map
}

export function asyncRouterMap () {
  const routerMap = [{
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { icon: 'home' },
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: 'label.dashboard',
          icon: 'dashboard',
          tabs: [
            {
              name: 'dashboard',
              component: () => import('@/views/dashboard/UsageDashboardChart')
            },
            {
              name: 'accounts',
              show: (record, route, user) => { return record.account === user.account || ['Admin', 'DomainAdmin'].includes(user.roletype) },
              component: () => import('@/views/project/AccountsTab')
            },
            {
              name: 'limits',
              params: {
                projectid: 'id'
              },
              show: (record, route, user) => { return ['Admin'].includes(user.roletype) },
              component: () => import('@/components/view/ResourceLimitTab.vue')
            }
          ]
        },
        component: () => import('@/views/dashboard/Dashboard')
      },

      // generateRouterMap(compute),
      // generateRouterMap(storage),
      // generateRouterMap(network),
      // generateRouterMap(image),
      // generateRouterMap(event),
      // generateRouterMap(project),
      // generateRouterMap(user),
      // generateRouterMap(role),
      generateRouterMap(account),
      // generateRouterMap(domain),
      // generateRouterMap(infra),
      // generateRouterMap(offering),
      // generateRouterMap(config),
      // generateRouterMap(quota),
      // generateRouterMap(cloudian),

      {
        path: '/exception',
        name: 'exception',
        component: RouteView,
        hidden: true,
        redirect: '/exception/404',
        meta: { title: 'Exception', icon: 'warning' },
        children: [
          {
            path: '/exception/403',
            name: '403',
            hidden: true,
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
            meta: { title: '403' }
          },
          {
            path: '/exception/404',
            name: '404',
            hidden: true,
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
            meta: { title: '404' }
          },
          {
            path: '/exception/500',
            name: '500',
            hidden: true,
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
            meta: { title: '500' }
          }
        ]
      }
    ]
  },
  {
    path: '*', redirect: '/exception/404', hidden: true
  }]

  // const plugins = Vue.prototype.$config.plugins
  // if (plugins && plugins.length > 0) {
  //   plugins.map(plugin => {
  //     routerMap[0].children.push({
  //       path: '/plugins/' + plugin.name,
  //       name: plugin.name,
  //       component: IFramePlugin,
  //       meta: { title: plugin.name, icon: plugin.icon, path: plugin.path }
  //     })
  //   })
  // }

  return routerMap
}

export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "auth" */ '@/views/auth/Login')
      }
    ]
  },
  {
    path: '/403',
    component: () => import(/* webpackChunkName: "forbidden" */ '@/views/exception/403')
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  },
  {
    path: '/500',
    component: () => import(/* webpackChunkName: "error" */ '@/views/exception/500')
  }
]
