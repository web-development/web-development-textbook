FROM ruby:2.7.1
RUN gem install bundler -v 1.17.3
RUN mkdir -p /app
WORKDIR /app
COPY Gemfile ./
COPY Gemfile.lock ./
RUN bundle install
COPY includes ./
COPY lib ./
COPY Rules ./
CMD ["nanoc"]
