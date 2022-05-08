FROM ruby:2.7.1
RUN mkdir -p /app
WORKDIR /app
COPY ./Gemfile ./Gemfile.lock ./
RUN bundle install
COPY ./ ./
EXPOSE 3000
CMD nanoc compile && nanoc view