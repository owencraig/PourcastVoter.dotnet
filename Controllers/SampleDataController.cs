using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApplicationBasic.Controllers
{
    [Route("data/options")]
    public class SampleDataController : Controller
    {

        [HttpGet()]
        public IEnumerable<Option> WeatherForecasts()
        {
            return DB.Options;
        }

        [HttpPost("vote/{id}")]
        public Option CastVote(string id){
            Option beer = DB.Options.FirstOrDefault(o => o.id == id);
            beer.voteCount += 1;
            return beer;
        }
    }
}
