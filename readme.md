# grads-api

Micro API to access [grads](https://github.com/kylehotchkiss.grads) library via browser. I made to host a few small programs via Heroku.

If you find this useful, please host your own copy on Heroku for free :)

NOTICE: THIS IS NOT PRODUCTION GRADE SOFTWARE. DO NOT USE FOR GENERAL PUBLIC PURPOSES. This is a scientific and experimental way of accessing NOAA's prediction data. That's all.

## Installation

* `npm i`
* `node start.js`

## Usage

* View `http://localhost:5000/forecast&vars=temperature&lat=x&lon=y&alt=z`.
* You can separate `vars` variables with `:` to provide more than one value. Here are the accepted params (list is short because I'm trying to abstract differences between models to allow switching them more easily in future):
** humidity
** gusts
** clouds
** pressure
** temperature
** snow_depth
** precipitation_rate
** wind_u_prs (not suitable for ground winds)1
** wind_v_prs (not suitable for ground winds)
* `lat`, `lon`, `alt`, `time` all can be converted to ranges by using a `:` between the first and last item. (Note: times might not work perfectly)
*
