import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MomentModule } from 'ngx-moment';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunityComponent } from './community/community.component';
import { DevComponent } from './dev/dev.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmptyResultsComponent } from './common/empty-results/empty-results.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderLargeComponent } from './common/header/header-large.component';
import { HeaderSmallComponent } from './common/header/header-small.component';
import { HotelClosedComponent } from './common/hotel-closed/hotel-closed.component';
import { MessageContainerComponent } from './common/message-container/message-container.component';
import { TabComponent } from './common/tabs/tab.component';
import { TabsComponent } from './common/tabs/tabs.component';
import { MessagingComponent } from './home/messaging/messaging.component';
import { NewsComponent } from './home/news/news.component';
import { RegisterBannerComponent } from './home/register-banner/register-banner.component';
import { ShopFooterComponent } from './shop/shop-footer/shop-footer.component';
import { NavigationComponent } from './common/header/navigation/navigation.component';
import { DiscussionsComponent } from './home/messaging/discussions/discussions.component';
import { LocalRegisterBannerComponent } from './home/register-banner/local-register-banner/local-register-banner.component';
import { UserMenuComponent } from './common/header/user-menu/user-menu.component';
import { HotelButtonNativeComponent } from './common/header/hotel-button-native/hotel-button-native.component';
import { HotelButtonComponent } from './common/header/hotel-button/hotel-button.component';
import { HotelButtonBetaComponent } from './common/header/hotel-button-beta/hotel-button-beta.component';
import { NativeHotelModalComponent } from './common/header/hotel-button-native/modal/native-hotel-modal.component';
import { LoginFormComponent } from './security/login/login-form.component';
import { ShopComponent } from './shop/shop.component';
import { PhotosComponent } from './community/photos/photos.component';
import { RoomsComponent } from './community/rooms/rooms.component';
import { CategoryComponent } from './community/category/category.component';
import { ArticleComponent } from './community/article/article.component';
import { OfficialRoomAvatarComponent } from './common/official-room-avatar/official-room-avatar.component';
import { AvatarComponent } from './common/avatar/avatar.component';
import { FansitesComponent } from './community/fansites/fansites.component';
import { PrepaidComponent } from './shop/prepaid/prepaid.component';
import { StoreComponent } from './shop/store/store.component';
import { EarnCreditsComponent } from './shop/earn-credits/earn-credits.component';
import { TransactionsComponent } from './shop/transactions/transactions.component';
import { SettingsComponent } from './settings/settings.component';
import { PrivacySettingsComponent } from './settings/privacy-settings/privacy-settings.component';
import { EmailChangeComponent } from './settings/email-change/email-change.component';
import { PasswordChangeComponent } from './settings/password-change/password-change.component';
import { AvatarSelectionComponent } from './settings/avatar-selection/avatar-selection.component';
import { AccountSecurityComponent } from './settings/account-security/account-security.component';
import { AvatarCreateComponent } from './settings/avatar-selection/avatar-create/avatar-create.component';
import { ActivationStatusComponent } from './settings/email-change/activation-status/activation-status.component';
import { TrustedLocationsResetComponent } from './settings/account-security/trusted-locations-reset.component';
import { AccountSecurityEditComponent } from './settings/account-security/account-security-edit.component';
import { EmailReportUnauthorizedComponent } from './email/email-report-unauthorized/email-report-unauthorized.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailReportUnauthorizedFormComponent } from './email/email-report-unauthorized/email-report-unauthorized-form.component';
import { EmailOptoutSuccessComponent } from './email/email-optout-success/email-optout-success.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ProfileComponent } from './profile/profile.component';
import { SocialShareComponent } from './common/social-share/social-share.component';
import { TransactionsListComponent } from './shop/transactions/transactions-list.component';
import { TransactionsHistoryComponent } from './shop/transactions/transactions-history.component';
import { PlayingHabboComponent } from './playing-habbo/playing-habbo.component';
import { WhatIsHabboComponent } from './playing-habbo/what-is-habbo.component';
import { SafetyComponent } from './playing-habbo/safety.component';
import { HowToPlayComponent } from './playing-habbo/how-to-play.component';
import { HelpComponent } from './playing-habbo/help.component';
import { HabboWayComponent } from './playing-habbo/habbo-way.component';
import { AdUnitComponent } from './common/ad-unit/ad-unit.component';
import { AdDoubleClickComponent } from './common/ad-unit/ad-double-click/ad-double-click.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from './security/login/login-modal.component';
import { AvatarCreateModalComponent } from './settings/avatar-selection/avatar-create/avatar-create-modal.component';
import { SafetyLockDisableModalComponent } from './settings/account-security/safety-lock-disable-modal/safety-lock-disable-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunityComponent,
    DevComponent,
    HomeComponent,
    NotFoundComponent,
    RegistrationComponent,
    EmptyResultsComponent,
    FooterComponent,
    HeaderLargeComponent,
    HeaderSmallComponent,
    HotelClosedComponent,
    MessageContainerComponent,
    TabComponent,
    TabsComponent,
    MessagingComponent,
    NewsComponent,
    RegisterBannerComponent,
    ShopFooterComponent,
    NavigationComponent,
    DiscussionsComponent,
    LocalRegisterBannerComponent,
    UserMenuComponent,
    HotelButtonNativeComponent,
    HotelButtonComponent,
    HotelButtonBetaComponent,
    NativeHotelModalComponent,
    LoginFormComponent,
    ShopComponent,
    PhotosComponent,
    RoomsComponent,
    CategoryComponent,
    ArticleComponent,
    OfficialRoomAvatarComponent,
    AvatarComponent,
    FansitesComponent,
    PrepaidComponent,
    StoreComponent,
    EarnCreditsComponent,
    TransactionsComponent,
    SettingsComponent,
    PrivacySettingsComponent,
    EmailChangeComponent,
    PasswordChangeComponent,
    AvatarSelectionComponent,
    AccountSecurityComponent,
    AvatarCreateComponent,
    ActivationStatusComponent,
    TrustedLocationsResetComponent,
    AccountSecurityEditComponent,
    EmailReportUnauthorizedComponent,
    EmailReportUnauthorizedFormComponent,
    EmailOptoutSuccessComponent,
    PasswordResetComponent,
    ProfileComponent,
    SocialShareComponent,
    TransactionsListComponent,
    TransactionsHistoryComponent,
    PlayingHabboComponent,
    WhatIsHabboComponent,
    SafetyComponent,
    HowToPlayComponent,
    HelpComponent,
    HabboWayComponent,
    AdUnitComponent,
    AdDoubleClickComponent,
    LoginModalComponent,
    AvatarCreateModalComponent,
    SafetyLockDisableModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'com',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    MomentModule,
    ReactiveFormsModule,
    NgbModalModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '/habbo-web-l10n/', '.json');
}
