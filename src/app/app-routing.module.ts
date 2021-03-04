import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './community/article/article.component';
import { CategoryComponent } from './community/category/category.component';
import { CommunityComponent } from './community/community.component';
import { FansitesComponent } from './community/fansites/fansites.component';
import { PhotosComponent } from './community/photos/photos.component';
import { RoomsComponent } from './community/rooms/rooms.component';
import { DevComponent } from './dev/dev.component';
import { EmailOptoutSuccessComponent } from './email/email-optout-success/email-optout-success.component';
import { EmailReportUnauthorizedComponent } from './email/email-report-unauthorized/email-report-unauthorized.component';
import { HomeComponent } from './home/home.component';
import { MessagingComponent } from './home/messaging/messaging.component';
import { NewsComponent } from './home/news/news.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { HabboWayComponent } from './playing-habbo/habbo-way.component';
import { HelpComponent } from './playing-habbo/help.component';
import { HowToPlayComponent } from './playing-habbo/how-to-play.component';
import { PlayingHabboComponent } from './playing-habbo/playing-habbo.component';
import { SafetyComponent } from './playing-habbo/safety.component';
import { WhatIsHabboComponent } from './playing-habbo/what-is-habbo.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccountSecurityComponent } from './settings/account-security/account-security.component';
import { AvatarSelectionComponent } from './settings/avatar-selection/avatar-selection.component';
import { EmailChangeComponent } from './settings/email-change/email-change.component';
import { PasswordChangeComponent } from './settings/password-change/password-change.component';
import { PrivacySettingsComponent } from './settings/privacy-settings/privacy-settings.component';
import { SettingsComponent } from './settings/settings.component';
import { EarnCreditsComponent } from './shop/earn-credits/earn-credits.component';
import { PrepaidComponent } from './shop/prepaid/prepaid.component';
import { ShopComponent } from './shop/shop.component';
import { StoreComponent } from './shop/store/store.component';
import { TransactionsComponent } from './shop/transactions/transactions.component';

const routes: Routes = [
  {
    path: 'dev/:page',
    component: DevComponent
  },
  {
    path: 'identity/report_unauthorized_usage',
    component: EmailReportUnauthorizedComponent,
    data: { title: 'HEAD_TITLE_EMAIL_REPORT_UNAUTHORIZED' }
  },
  {
    path: 'email/optout_success',
    component: EmailOptoutSuccessComponent,
    data: { title: 'HEAD_TITLE_EMAIL_OPTOUT' }
  },
  {
    path: 'reset-password/:token',
    component: PasswordResetComponent,
    data: { title: 'HEAD_TITLE_PASSWORD_RESET' }
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    data: { title: 'HEAD_TITLE_REGISTRATION' }
  },
  { path: 'login_popup', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: NewsComponent,
        data: { title: 'HEAD_TITLE_NEWS' }
      },
      {
        path: 'messaging',
        component: MessagingComponent,
        data: { title: 'HEAD_TITLE_MESSAGING' }
      }
    ]
  },
  { path: 'community', redirectTo: 'community/photos', pathMatch: 'full' },
  { path: 'community/category', redirectTo: 'community/category/all', pathMatch: 'full' },
  { path: 'community/category/:category', redirectTo: 'community/category/:category/1', pathMatch: 'full' },
  { path: 'article/:id/:slug', redirectTo: 'community/article/:id/:slug', pathMatch: 'full' },
  { path: 'articles/{id:[0-9]*}-{slug:[a-z-]*}', redirectTo: 'article/:id/:slug', pathMatch: 'full' },
  {
    path: 'community',
    component: CommunityComponent,
    children: [
      {
        path: 'photos',
        component: PhotosComponent,
        data: { title: 'HEAD_TITLE_PHOTOS' }
      },
      {
        path: 'rooms',
        component: RoomsComponent,
        data: { title: 'HEAD_TITLE_ROOMS' }
      },
      {
        path: 'fansites',
        component: FansitesComponent,
        data: { title: 'HEAD_TITLE_FANSITES' }
      },
      {
        path: 'category/:category/:page',
        component: CategoryComponent
      },
      {
        path: 'article/:id/:title',
        component: ArticleComponent
      }
    ]
  },
  { path: 'credits', redirectTo: 'shop', pathMatch: 'full' },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      {
        path: '',
        component: StoreComponent,
        data: { title: 'HEAD_TITLE_SHOP' }
      },
      {
        path: 'prepaid',
        component: PrepaidComponent,
        data: { title: 'HEAD_TITLE_SHOP_PREPAID' }
      },
      {
        path: 'earn-credits',
        component: EarnCreditsComponent,
        data: { title: 'HEAD_TITLE_SHOP_EARN_CREDITS' }
      },
      {
        path: 'history',
        component: TransactionsComponent,
        data: { title: 'HEAD_TITLE_SHOP_HISTORY' }
      }
    ]
  },
  { path: 'playing-habbo', redirectTo: 'playing-habbo/what-is-habbo', pathMatch: 'full' },
  {
    path: 'playing-habbo',
    component: PlayingHabboComponent,
    children: [
      {
        path: 'what-is-habbo',
        component: WhatIsHabboComponent,
        data: { title: 'HEAD_TITLE_PLAYING_HABBO_WHAT_IS_HABBO' }
      },
      {
        path: 'how-to-play',
        component: HowToPlayComponent,
        data: { title: 'HEAD_TITLE_PLAYING_HABBO_HOW_TO_PLAY' }
      },
      {
        path: 'habbo-way',
        component: HabboWayComponent,
        data: { title: 'HEAD_TITLE_PLAYING_HABBO_HABBO_WAY' }
      },
      {
        path: 'safety',
        component: SafetyComponent,
        data: { title: 'HEAD_TITLE_PLAYING_HABBO_SAFETY' }
      },
      {
        path: 'help',
        component: HelpComponent,
        data: { title: 'HEAD_TITLE_PLAYING_HABBO_HELP' }
      },
    ]
  },
  { path: 'home/:name', redirectTo: 'profile/:name', pathMatch: 'full' },
  { path: 'profile', redirectTo: '', pathMatch: 'full' },
  {
    path: 'profile/:name',
    component: ProfileComponent,
    data: { title: 'HEAD_TITLE_PROFILE' }
  },
  { path: 'settings', redirectTo: 'settings/privacy', pathMatch: 'full' },
  { path: 'avatars', redirectTo: 'settings/avatars', pathMatch: 'full' },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {
        path: 'privacy',
        component: PrivacySettingsComponent,
        data: { title: 'HEAD_TITLE_PRIVACY_SETTINGS' }
      },
      {
        path: 'security',
        component: AccountSecurityComponent,
        data: { title: 'HEAD_TITLE_ACCOUNT_SECURITY' }
      },
      {
        path: 'password',
        component: PasswordChangeComponent,
        data: { title: 'HEAD_TITLE_PASSWORD_CHANGE' }
      },
      {
        path: 'email',
        component: EmailChangeComponent,
        data: { title: 'HEAD_TITLE_EMAIL_CHANGE' }
      },
      {
        path: 'avatars',
        component: AvatarSelectionComponent,
        data: { title: 'HEAD_TITLE_AVATAR_SELECTION' }
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: 'HEAD_TITLE_NOT_FOUND' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
