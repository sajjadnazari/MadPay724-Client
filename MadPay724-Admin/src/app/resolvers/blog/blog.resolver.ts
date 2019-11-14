import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { Blog } from 'src/app/models/blog/blogGroup';
import { BlogService } from 'src/app/Services/panel/blog/blogGroup.service';

@Injectable()
export class BlogResolver implements Resolve<Blog[]> {
    constructor(private blogService: BlogService, private router: Router,
                private alertService: ToastrService, private authService: AuthService) { }
    resolve(route: ActivatedRouteSnapshot): Observable<Blog[]> {
        return this.blogService.getBlogs(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertService.error(error, 'خطا');
                this.router.navigate(['/panel/blog/blog']);
                return of(null);
            })
        );
    }
}
