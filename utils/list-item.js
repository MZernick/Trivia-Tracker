import { registerHelper } from 'handlebars';

registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});
 
