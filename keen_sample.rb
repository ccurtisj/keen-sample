class KeenSampleApp < Sinatra::Base

  configure do
    Keen.project_id = '5507341146f9a73ceebaf4c8'
    Keen.write_key = '773674cd22bef114c008a3ee6b79cb75d3d6b81bb07f5f40806033a161d56d63255c039cf2d6ed337a6fd96e4f1fa45b5606567c4e342b46439ce6f50c2855b6ce13e1e995f1303cef65cb57faa1089e9c944c69110257477f237eb86fc1cb8ec5230b80a82b5ccfd7522594b39cd6cb'
    Keen.read_key = 'a281d068b4774dfe797d5ac3ef72875d2ae2d60864e349196f0392d2d560226e3da7ec91f2e3e37657451aef5ef969510e645bbbe9466eea24905247422094db13fbbbc15c8646876b4912341fa71410daee759a5a8d32ff74756e3fd3951d974e032d4f121fafa2a6204ed46d9a5e3b'
    Keen.master_key = '562881177C13E64980BB286A9D423A95'
  end

  get '/' do
    slim :index
  end

  get '/publish' do
    Keen.publish :page_views, { client: 'sinartra server' }
    redirect '/'
  end
end