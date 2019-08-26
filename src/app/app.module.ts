import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { GithubComponent } from './github/github.component';
import { HttpClientModule } from '@angular/common/http';
import { ReposComponent } from './repos/repos.component';
import { DatePipePipe } from './date-pipe.pipe';
import { SearchRepoComponent } from './search-repo/search-repo.component';
import { GithubDirective } from './github.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchFormComponent,
    GithubComponent,
    ReposComponent,
    DatePipePipe,
    SearchRepoComponent,
    GithubDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
