# frozen_string_literal: true

require 'English'
require 'English'

desc 'Compile the site'
task compile: [:clean] do
  puts 'Compiling site'
  out = `LANG=en_US.UTF-8 bundle exec nanoc compile > logs/compile.log 2>&1`

  if $CHILD_STATUS.to_i.zero?
    puts  'Compilation succeeded'
  else
    abort "Compilation failed: #{$CHILD_STATUS.to_i}\n" \
          "#{out}\n"
  end
  sh './deploy.sh'
end

desc 'start server'
task :start do
  puts 'Starting web server'
  out = `LANG=en_US.UTF-8 bundle exec nanoc view & > logs/view.log 2>&1 `
end

task :clean do
  FileUtils.rm_r('output') if File.exist?('output')
end

task :test do
  require 'html-proofer'
  HTMLProofer.check_directory('output').run
end

task default: 'compile'
