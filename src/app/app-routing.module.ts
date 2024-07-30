import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { VexRoutes } from '../@vex/interfaces/vex-route.interface';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { AuthGuardService } from './base/guard';

export const routes: VexRoutes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  },

  {
    path: '',
    component: CustomLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboards/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'category',
        loadChildren: () => import('../app/features/category/category.module').then(m => m.CategoryModule),
      },
      {
        path: 'supplier',
        loadChildren: () => import('../app/features/supplier/supplier.module').then(m => m.SupplierModule),
      },
      {
        path: 'product',
        loadChildren: () => import('../app/features/product/product.module').then(m => m.ProductModule),
      },
      {
        path: 'customer',
        loadChildren: () => import('../app/features/customer/customer.module').then(m => m.CustomerModule),
      },
      {
        path: 'todo-list',
        loadChildren: () => import('../app/features/todo-list/todo-list.module').then(m => m.TodoListModule),
        data: { breadcrumb: 'TODO list' }
      },
      {
        path: 'pages',
        data: { breadcrumb: 'Pages' },
        children: [
          {
            path: 'error-404',
            loadChildren: () => import('./features/pages/error-404/error-404.module').then(m => m.Error404Module)
          },
          {
            path: 'error-500',
            loadChildren: () => import('./features/pages/error-500/error-500.module').then(m => m.Error500Module)
          },
          {
            path: 'coming-soon',
            loadChildren: () => import('./features/pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
          },
        ]
      },

      {
        path: 'project',
        loadChildren: () => import('../app/features/project/project.module').then(m => m.ProjectModule),
      },
      {
        path: 'invoice',
        loadChildren: () => import('./features/invoice/invoice.module').then(m => m.InvoiceModule)
      },

      {
        path: 'guides',
        loadChildren: () => import('./features/guides/guides.module').then(m => m.GuidesModule)
      },









      {
        path: 'apps',
        children: [
          {
            path: 'chat',
            loadChildren: () => import('./pages/apps/chat/chat.module').then(m => m.ChatModule),
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'mail',
            loadChildren: () => import('./pages/apps/mail/mail.module').then(m => m.MailModule),
            data: {
              toolbarShadowEnabled: true,
              scrollDisabled: true
            }
          },
          {
            path: 'social',
            loadChildren: () => import('./pages/apps/social/social.module').then(m => m.SocialModule)
          },
          {
            path: 'contacts',
            loadChildren: () => import('./pages/apps/contacts/contacts.module').then(m => m.ContactsModule)
          },
          {
            path: 'calendar',
            loadChildren: () => import('./pages/apps/calendar/calendar.module').then(m => m.CalendarModule),
            data: {
              toolbarShadowEnabled: true
            }
          },
          {
            path: 'aio-table',
            loadChildren: () => import('./pages/apps/aio-table/aio-table.module').then(m => m.AioTableModule),
          },
          {
            path: 'help-center',
            loadChildren: () => import('./pages/apps/help-center/help-center.module').then(m => m.HelpCenterModule),
          },
          {
            path: 'scrumboard',
            loadChildren: () => import('./pages/apps/scrumboard/scrumboard.module').then(m => m.ScrumboardModule),
          },
          {
            path: 'editor',
            loadChildren: () => import('./pages/apps/editor/editor.module').then(m => m.EditorModule),
          },
        ]
      },
      {
        path: 'pages',
        children: [
          {
            path: 'pricing',
            loadChildren: () => import('./pages/pages/pricing/pricing.module').then(m => m.PricingModule)
          },
          {
            path: 'faq',
            loadChildren: () => import('./pages/pages/faq/faq.module').then(m => m.FaqModule)
          },

        ]
      },
      {
        path: 'ui',
        children: [
          {
            path: 'components',
            loadChildren: () => import('./pages/ui/components/components.module').then(m => m.ComponentsModule),
          },
          {
            path: 'forms/form-elements',
            loadChildren: () => import('./pages/ui/forms/form-elements/form-elements.module').then(m => m.FormElementsModule),
            data: {
              containerEnabled: true
            }
          },
          {
            path: 'forms/form-wizard',
            loadChildren: () => import('./pages/ui/forms/form-wizard/form-wizard.module').then(m => m.FormWizardModule),
            data: {
              containerEnabled: true
            }
          },
          {
            path: 'icons',
            loadChildren: () => import('./pages/ui/icons/icons.module').then(m => m.IconsModule)
          },
          {
            path: 'page-layouts',
            loadChildren: () => import('./pages/ui/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule),
          },
        ]
      },
      {
        path: 'documentation',
        loadChildren: () => import('./pages/documentation/documentation.module').then(m => m.DocumentationModule),
      },
      {
        path: '**',
        loadChildren: () => import('./features/pages/error-404/error-404.module').then(m => m.Error404Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule, QuicklinkModule]
})
export class AppRoutingModule {
}
