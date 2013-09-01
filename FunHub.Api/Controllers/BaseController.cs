using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FunHub.Data;
using FunHub.Model;

namespace FunHub.Api.Controllers
{
    public class BaseController : ApiController
    {
        protected FunHubContext context;

        public BaseController()
        {
            this.context = new FunHubContext();
        }

        protected T PerformOperationAndHandleExceptions<T>(Func<T> operation)
        {
            try
            {
                return operation();
            }
            catch (Exception ex)
            {
                var errResponse = this.Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex.Message);
                throw new HttpResponseException(errResponse);
            }
        }
    }
}
