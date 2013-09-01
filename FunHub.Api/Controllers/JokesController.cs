using FunHub.Api.Models;
using FunHub.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FunHub.Api.Controllers
{
    public class JokesController : BaseController
    {
        public IQueryable<JokeModel> GetAll()
        {
            var response = this.PerformOperationAndHandleExceptions(() =>
                {
                    var models =
                        (from joke in this.context.Jokes
                         select new JokeModel()
                         {
                             PostedBy = joke.PostedBy,
                             PostDate = joke.PostDate,
                             Content = joke.Content
                         }).OrderByDescending(x => x.PostDate);

                    return models;
                });

            return response;
        }

        public IQueryable<JokeModel> GetSpesific(int offset, int count)
        {
            var response = this.PerformOperationAndHandleExceptions(() =>
            {
                var filtered = this.context.Jokes.OrderByDescending(x => x.PostDate).Skip(offset).Take(count);

                var models =
                    (from joke in filtered
                     select new JokeModel()
                     {
                         PostedBy = joke.PostedBy,
                         PostDate = joke.PostDate,
                         Content = joke.Content
                     });

                return models;
            });

            return response;
        }

        public HttpResponseMessage PostJoke([FromBody] JokeModel model)
        {
            var response = this.PerformOperationAndHandleExceptions(() => 
            {
                Joke newJoke = new Joke()
                {
                    PostedBy = model.PostedBy,
                    PostDate = DateTime.Now,
                    Content = model.Content
                };

                this.context.Jokes.Add(newJoke);
                this.context.SaveChanges();

                return this.Request.CreateResponse(HttpStatusCode.Created);
            });

            return response;
        }
    }
}
